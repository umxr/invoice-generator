import uuid from 'uuid/v4';

export default {
  R204: {
    companyName: 'company name',
    companyAddress: 'company address',
    invoiceTo: 'invoice to address',
    invoiceContact: 'invoice contact',
    DeliveredTo: 'delivered to',
    vatRegNo: 'VAT reg no',
    purchaseOrderNumber: 'purchase order number',
    telephone: 'tel',
    fax: 'fax',
    email: 'email',
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
    companyName: 'company name',
    companyAddress: 'company address,',
    invoiceTo: 'invoice to address',
    invoiceContact: 'invoice contact',
    DeliveredTo: 'delivered to',
    vatRegNo: 'VAT reg no',
    purchaseOrderNumber: 'purchase order number',
    telephone: 'tel',
    fax: 'fax',
    email: 'email',
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
