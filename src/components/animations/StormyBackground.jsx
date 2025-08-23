import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const StormyBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = {
    background: {
      color: {
        value: '#060c14', // Fondo de noche profunda
      },
    },
    fullScreen: {
      enable: true,
      zIndex: -1, // Coloca las partículas en el fondo
    },
    particles: {
      // Partículas de Lluvia
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#a5b4fc', // Tono lavanda pálido
      },
      shape: {
        type: 'line',
      },
      size: {
        value: { min: 1, max: 3 },
      },
      opacity: {
        value: { min: 0.1, max: 0.4 },
      },
      move: {
        enable: true,
        direction: 'bottom',
        straight: true,
        speed: 9,
        out_modes: {
          default: 'out',
        },
      },
      // Partículas de Relámpago (un flash global)
      absorbers: [
        {
          name: 'lightning',
          position: { x: 50, y: 50 },
          size: {
            value: 0,
            limit: 0,
          },
          // Esto se activará con un evento
        },
      ],
    },
    // Evento para el relámpago
    interactivity: {
      events: {
        onHover: {
          enable: false, // Desactivado por defecto
        },
      },
      modes: {
        lightning: {
          // Configuración del modo relámpago
        },
      },
    },
  };

  // Simular relámpagos a intervalos aleatorios
  React.useEffect(() => {
    const interval = setInterval(() => {
      const lightningEvent = new CustomEvent('lightning');
      window.dispatchEvent(lightningEvent);
    }, Math.random() * 8000 + 4000); // Entre 4 y 12 segundos

    const handleLightning = () => {
      const particles = window.tsParticles.domItem(0);
      if (particles) {
        const oldColor = particles.options.background.color.value;
        particles.options.background.color.value = '#a5b4fc'; // Color del flash
        particles.refresh();

        setTimeout(() => {
          particles.options.background.color.value = oldColor;
          particles.refresh();
        }, 150); // Duración del flash
      }
    };

    window.addEventListener('lightning', handleLightning);

    return () => {
      clearInterval(interval);
      window.removeEventListener('lightning', handleLightning);
    };
  }, []);

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
};

export default StormyBackground;