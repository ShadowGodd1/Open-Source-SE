# Kubernetes Deployment Guide

This guide provides instructions for deploying the Open Source Economic Empowerment Ecosystem to a Kubernetes cluster.

## Prerequisites

- Kubernetes cluster (EKS, GKE, AKS, or self-managed)
- kubectl configured to access your cluster
- Docker installed locally
- AWS CLI (if using AWS ECR)
- Helm (optional, for additional components)

## Deployment Steps

### 1. Set Up Environment Variables

Create a `.env` file with the necessary environment variables:

```bash
# Create a copy of the example env file
cp .env.example .env

# Edit the file with your values
nano .env
```

### 2. Build and Push Docker Image

```bash
# Build the Docker image
docker build -t osee-kenya:latest .

# Tag the image for your registry
docker tag osee-kenya:latest <your-registry>/osee-kenya:latest

# Push the image to your registry
docker push <your-registry>/osee-kenya:latest
```

### 3. Create Kubernetes Secrets

```bash
# Create a namespace
kubectl create namespace osee-kenya

# Create secrets from .env file
kubectl create secret generic osee-kenya-secrets --from-env-file=.env -n osee-kenya
```

### 4. Deploy to Kubernetes

```bash
# Update the image in the deployment.yaml file
sed -i "s|\${ECR_REPOSITORY_URI}|<your-registry>|g" kubernetes/deployment.yaml
sed -i "s|\${IMAGE_TAG}|latest|g" kubernetes/deployment.yaml

# Apply the Kubernetes manifests
kubectl apply -k kubernetes/ -n osee-kenya
```

Alternatively, use our deployment script:

```bash
./scripts/k8s-deploy.sh --environment production --ecr-uri <your-registry>/osee-kenya
```

### 5. Verify Deployment

```bash
# Check the status of the deployment
kubectl rollout status deployment/osee-kenya -n osee-kenya

# Check the pods
kubectl get pods -n osee-kenya

# Check the services
kubectl get svc -n osee-kenya

# Check the ingress
kubectl get ingress -n osee-kenya
```

### 6. Access the Application

Once the deployment is complete, you can access the application at the URL configured in your ingress.

## Scaling

The application is configured with a Horizontal Pod Autoscaler (HPA) that will automatically scale based on CPU and memory usage:

```bash
# Check the HPA status
kubectl get hpa -n osee-kenya
```

You can manually scale the deployment if needed:

```bash
kubectl scale deployment/osee-kenya --replicas=5 -n osee-kenya
```

## Monitoring

Set up monitoring for your Kubernetes deployment:

1. Install Prometheus and Grafana using Helm:
   ```bash
   helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
   helm repo update
   helm install prometheus prometheus-community/kube-prometheus-stack -n monitoring --create-namespace
   ```

2. Access Grafana:
   ```bash
   kubectl port-forward svc/prometheus-grafana 3000:80 -n monitoring
   ```

3. Import dashboards for Node.js applications and Kubernetes.

## Troubleshooting

### Check Logs

```bash
# Get pod names
kubectl get pods -n osee-kenya

# Check logs for a specific pod
kubectl logs <pod-name> -n osee-kenya

# Follow logs
kubectl logs -f <pod-name> -n osee-kenya
```

### Debug with a Shell

```bash
# Get a shell in a running pod
kubectl exec -it <pod-name> -n osee-kenya -- /bin/sh
```

### Check Events

```bash
kubectl get events -n osee-kenya
```

## Rollback

If you need to rollback to a previous version:

```bash
# Check deployment history
kubectl rollout history deployment/osee-kenya -n osee-kenya

# Rollback to previous version
kubectl rollout undo deployment/osee-kenya -n osee-kenya

# Rollback to specific revision
kubectl rollout undo deployment/osee-kenya --to-revision=<revision-number> -n osee-kenya
```

## Cleanup

To remove the deployment:

```bash
kubectl delete -k kubernetes/ -n osee-kenya
```

To delete the namespace and all resources in it:

```bash
kubectl delete namespace osee-kenya
```
