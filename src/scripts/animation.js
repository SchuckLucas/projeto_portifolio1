export default function animar() {
  const elements = getElements();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        return;
      }
      entry.target.classList.remove("show");
    });
  });

  elements.forEach((e) => observer.observe(e));

  function getElements() {
    let list = [];
    document.querySelectorAll("section").forEach((section) => {
      Array.from(section.children).forEach((filho) => {
        filho.classList.add("hidden");
        list.push(filho);
      });
    });
    return list;
  }
}
