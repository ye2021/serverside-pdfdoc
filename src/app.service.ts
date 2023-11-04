import { Injectable } from '@nestjs/common';
import PdfPrinter from 'pdfmake';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

@Injectable()
export class AppService {
  createPdfdoc(): PDFKit.PDFDocument {
    const fonts = {
      Roboto: {
        normal: 'fonts/Roboto-Regular.ttf',
        bold: 'fonts/Roboto-Medium.ttf',
        italics: 'fonts/Roboto-Italic.ttf',
        bolditalics: 'fonts/Roboto-MediumItalic.ttf',
      },
    };

    const printer = new PdfPrinter(fonts);
    const docDefinition = {
      content: [
        'First paragraph111',
        'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines',
      ],
      // ...
    } as TDocumentDefinitions;

    const options = {
      // ...
    };

    return printer.createPdfKitDocument(docDefinition, options);
  }
}
