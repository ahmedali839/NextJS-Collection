import { NodeSDK } from '@opentelemetry/sdk-node';
import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';

const sdk = new NodeSDK({
  resource: new Resource({
    // Give your service a name so you can identify it in dashboards
    [SemanticResourceAttributes.SERVICE_NAME]: 'nextjs-quran-academy',
  }),
  // VISUAL OPTION A: Print everything to your Terminal/Console
  traceExporter: new ConsoleSpanExporter(), 
  
  // This automatically tracks HTTP calls, Fetch, and DB queries
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();

// Shut down gracefully
process.on('SIGTERM', () => {
  sdk.shutdown()
    .then(() => console.log('OTEL SDK shut down'))
    .catch((err) => console.log('Error shutting down OTEL SDK', err))
    .finally(() => process.exit(0));
});