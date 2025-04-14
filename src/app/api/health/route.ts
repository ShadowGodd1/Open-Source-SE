import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check database connection
    let dbStatus = 'unknown';
    try {
      // In a real application, you would check the database connection here
      // For example, with Supabase:
      // const { data, error } = await supabase.from('health_check').select('*').limit(1);
      // if (error) throw error;
      dbStatus = 'connected';
    } catch (error) {
      console.error('Database health check failed:', error);
      dbStatus = 'disconnected';
    }

    // Check external services
    const services = {
      database: dbStatus,
      // In a real application, you would check other services here
      // For example:
      // 'africa-talking': await checkAfricasTalkingService(),
      // 'mpesa': await checkMpesaService(),
    };

    // Get application info
    const info = {
      version: process.env.npm_package_version || '0.1.0',
      environment: process.env.NODE_ENV || 'development',
      uptime: process.uptime(),
    };

    return NextResponse.json(
      {
        status: 'ok',
        timestamp: new Date().toISOString(),
        services,
        info,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Health check failed:', error);
    return NextResponse.json(
      {
        status: 'error',
        timestamp: new Date().toISOString(),
        message: 'Health check failed',
      },
      { status: 500 }
    );
  }
}
