export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const offset = 20; // Padding from top
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};