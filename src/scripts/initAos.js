import AOS from 'aos';
import 'aos/dist/aos.css';

export function initAos() {
  AOS.init({
    once: true,
    duration: 800,
    easing: 'ease-out',
  });
}
