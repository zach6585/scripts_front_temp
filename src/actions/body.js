import html2canvas from 'html2canvas';
// import { jsPDF } from "jspdf";

export const IMAGE_LOADING = "LOADING";
export const IMAGE_SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const printDocument = (input, mentee_name) => dispatch => {
    input.removeChild(input.lastElementChild);
    html2canvas(input)
    .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = `bodyImage${mentee_name}`;
        link.href = imgData;
        link.click();
    
        // const pdf = new jsPDF();
        // pdf.addImage(imgData, 'PNG', 0, 0);
        // pdf.save(`bodyImage${mentee_name}`);
      })
}
