var pdf = require("html-pdf");

class PdfWriter{
    static WriterPdf(filename, html){
        pdf.create(html, {}).toFile(filename, (err) =>{
            return undefined;
        });
    }
}

module.exports = PdfWriter;