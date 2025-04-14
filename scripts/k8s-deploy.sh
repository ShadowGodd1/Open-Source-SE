#!/bin/bash
# Kubernetes deployment script for OSEE Kenya

set -e

# Default values
ENVIRONMENT="staging"
NAMESPACE="osee-kenya"
IMAGE_TAG="latest"
ECR_REPOSITORY_URI=""

# Parse command line arguments
while [[ $# -gt 0 ]]; do
  key="$1"
  case $key in
    --environment|-e)
      ENVIRONMENT="$2"
      shift
      shift
      ;;
    --namespace|-n)
      NAMESPACE="$2"
      shift
      shift
      ;;
    --image-tag|-t)
      IMAGE_TAG="$2"
      shift
      shift
      ;;
    --ecr-uri|-u)
      ECR_REPOSITORY_URI="$2"
      shift
      shift
      ;;
    --help|-h)
      echo "Usage: $0 [options]"
      echo "Options:"
      echo "  --environment, -e   Environment to deploy to (staging, production)"
      echo "  --namespace, -n     Kubernetes namespace"
      echo "  --image-tag, -t     Docker image tag"
      echo "  --ecr-uri, -u       ECR repository URI"
      echo "  --help, -h          Show this help message"
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      exit 1
      ;;
  esac
done

# Validate required parameters
if [ -z "$ECR_REPOSITORY_URI" ]; then
  echo "Error: ECR repository URI is required"
  exit 1
fi

echo "Deploying to $ENVIRONMENT environment in namespace $NAMESPACE"
echo "Using image: $ECR_REPOSITORY_URI:$IMAGE_TAG"

# Update Kubernetes manifests
cd kubernetes
sed -i "s|\${ECR_REPOSITORY_URI}|$ECR_REPOSITORY_URI|g" deployment.yaml
sed -i "s|\${IMAGE_TAG}|$IMAGE_TAG|g" deployment.yaml

# Apply Kubernetes manifests
echo "Creating namespace if it doesn't exist..."
kubectl create namespace $NAMESPACE --dry-run=client -o yaml | kubectl apply -f -

echo "Applying Kubernetes manifests..."
kubectl apply -k . -n $NAMESPACE

echo "Waiting for deployment to complete..."
kubectl rollout status deployment/osee-kenya -n $NAMESPACE --timeout=300s

echo "Deployment completed successfully!"
echo "Pods in the $NAMESPACE namespace:"
kubectl get pods -n $NAMESPACE

# Restore the original files
git checkout -- deployment.yaml

echo "Done!"
