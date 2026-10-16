import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onIntro, releaseIntro } from '@/components/animation/intro';
import { scrollToTarget } from '@/components/animation/lenis-instance';
import initSmoothScroll from '@/components/animation/smooth-scroll';
import initAccordion from '@/components/animation/init/accordion';
import initButtons from '@/components/animation/init/buttons';
import initFooter from '@/components/animation/init/footer';
import initNavbar from '@/components/animation/init/navbar';
import initReveal from '@/components/animation/init/reveal';

gsap.registerPlugin(ScrollTrigger);

initSmoothScroll();
initAccordion();
initButtons();
initFooter();
initNavbar();
initReveal();
releaseIntro();

const watchLayout = () => {
  const page = document.querySelector('[data-page]');
  if (!page) return;
  let measured = document.documentElement.scrollHeight;
  let timer = 0;
  ScrollTrigger.addEventListener('refresh', () => {
    measured = document.documentElement.scrollHeight;
  });
  new ResizeObserver(() => {
    if (Math.abs(document.documentElement.scrollHeight - measured) < 2) return;
    window.clearTimeout(timer);
    timer = window.setTimeout(() => ScrollTrigger.refresh(), 180);
  }).observe(page);
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
};

onIntro(() => {
  ScrollTrigger.sort();
  ScrollTrigger.refresh();
  watchLayout();
  if (!window.location.hash) return;
  const target = document.querySelector<HTMLElement>(window.location.hash);
  if (target) setTimeout(() => scrollToTarget(target), 200);
});
