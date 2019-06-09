import uuid from 'uuid/v4';

export default {
  R204: {
    companyName: 'H Gora T/A Areema Travel',
    companyAddress: '18 Woodfield Avenue,Batley,WF17 7EA,',
    invoiceTo:
      'Marketplace Invoice Kirkless Council 4th Floor, Civic Centre 1 High Street, Huddersfield HD1 2PW',
    invoiceContact: 'Hussain Gora',
    DeliveredTo: 'School Transport, Route 204',
    vatRegNo: '993652180',
    purchaseOrderNumber: '3300167020',
    telephone: '01924 503737',
    fax: '01942 503737',
    email: 'areematravel@virginmedia.com',
    invoiceReference: '',
    invoiceDate: '',
    table: [
      {
        id: uuid(),
        qty: null,
        description: 'Line 1, Line 2, Line 3',
        unitPrice: 20,
        VATRate: 12,
        Total: 123,
      },
    ],
  },
  R208: {
    companyName: 'H Gora T/A Areema Travel',
    companyAddress: '18 Woodfield Avenue,Batley,WF17 7EA,',
    invoiceTo:
      'Marketplace Invoice Kirkless Council 4th Floor, Civic Centre 1 High Street, Huddersfield HD1 2PW',
    invoiceContact: 'Hussain Gora',
    DeliveredTo: 'School Transport, Route 208',
    vatRegNo: '993652180',
    purchaseOrderNumber: '3300199032',
    telephone: '01924 503737',
    fax: '01942 503737',
    email: 'areematravel@virginmedia.com',
    invoiceReference: '',
    invoiceDate: '',
    table: [
      {
        id: uuid(),
        qty: null,
        description: 'Line 1, Line 2, Line 3',
        unitPrice: 20,
        VATRate: 12,
        Total: 123,
      },
    ],
  },
};
