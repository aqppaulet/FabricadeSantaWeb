document.addEventListener('DOMContentLoaded', () => {
  const stage = document.querySelector('.tumi-stage');
  const assemble = document.querySelector('.assemble');
  if (stage && assemble) {
    assemble.addEventListener('click', () => {
      const expanded = stage.classList.toggle('assembled');
      assemble.setAttribute('aria-pressed', expanded);
      assemble.innerHTML = expanded ? '<span>↺</span> unir piezas' : '<span>✦</span> ver piezas';
    });
  }

  const sound = document.querySelector('.sound-toggle');
  if (sound) {
    sound.addEventListener('click', () => {
      const on = sound.getAttribute('aria-pressed') !== 'true';
      sound.setAttribute('aria-pressed', on);
      sound.innerHTML = on ? '<span class="sound-icon" aria-hidden="true">◑</span> ambiente activo' : '<span class="sound-icon" aria-hidden="true">◐</span> activar ambiente';
    });
  }

  document.querySelectorAll('.principle-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      document.querySelectorAll('.principle-card').forEach(item => item.classList.remove('active'));
      card.classList.add('active');
    });
    card.addEventListener('focusin', () => card.classList.add('active'));
  });

  document.querySelectorAll('.video-thumbnail').forEach(video => {
    const revealFrame = () => {
      if (Number.isFinite(video.duration) && video.duration > 0) {
        video.currentTime = Math.min(0.2, video.duration / 2);
      }
    };
    video.addEventListener('loadedmetadata', revealFrame, { once: true });
    video.addEventListener('seeked', () => video.classList.add('thumbnail-ready'), { once: true });
  });

  const gameplay = document.querySelector('.gameplay-player');
  if (gameplay) {
    gameplay.addEventListener('loadedmetadata', () => {
      if (Number.isFinite(gameplay.duration) && gameplay.duration > 0) {
        gameplay.currentTime = Math.min(0.2, gameplay.duration / 2);
      }
    }, { once: true });
  }
});
