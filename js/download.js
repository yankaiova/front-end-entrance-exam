import html2pdf from 'html2pdf.js';

document.addEventListener('DOMContentLoaded', () => {
  const downloadBtn = document.getElementById('downloadBtn');
  downloadBtn.addEventListener('click', () => {
    const container = document.createElement('div');
    container.style.width = '210mm';
    container.style.minHeight = '350mm';
    container.style.margin = '0';
    container.style.padding = '0';
    container.style.background = '#fff';
    container.style.color = '#000';
    container.style.boxSizing = 'border-box';

    const style = document.createElement('style');
    style.textContent = `
          html, body {
            margin: 0 !important;
            padding: 0 !important;
          }
          * {
            margin: 0 !important;
            padding: 0 !important;
            box-sizing: border-box !important;
            font-family: 'Poppins', sans-serif !important;
          }
          .header, main {
            padding: 0 !important;
            max-width: 550px !important;
            margin: 0 auto  !important;
          }
          main {
            margin-top: 10px !important;
          }
          section {
            padding: 0.8rem !important;
          }
        `;
    container.appendChild(style);

    const header = document.querySelector('header.header');
    const main = document.querySelector('main');

    if (header) container.appendChild(header.cloneNode(true));
    if (main) container.appendChild(main.cloneNode(true));

    const options = {
      margin: 0,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().set(options).from(container).save();
  });
});
