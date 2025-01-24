module.exports = {
    apps: [
      {
        name: 'app',
        script: 'app.js',
        instances: 1, // 1 instância para usar 20% de CPU (aproximadamente)
        exec_mode: 'cluster', // Modo de cluster
        max_memory_restart: '1G', // Limite de 20% de RAM
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  