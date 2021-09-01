import { render } from '@testing-library/react'
import Card from './Card'

test('The card is ready', () => {
  const products = [{ "id": "4c87ad42-6e4a-4289-a62f-aaf531011388", "version": 7, "productType": { "typeId": "product-type", "id": "a016a83e-086e-408b-bdd1-e0e4551c700b" }, "name": { "en-US": "Acer Notebook" }, "description": { "en-US": "Intel" }, "categories": [{ "typeId": "category", "id": "756a3624-d117-4c13-b598-35b7b2152cac" }], "categoryOrderHints": {}, "slug": { "en-US": "acer-notebook" }, "metaTitle": { "de-DE": "", "en-US": "" }, "metaDescription": { "de-DE": "", "en-US": "" }, "masterVariant": { "id": 1, "prices": [], "images": [], "attributes": [], "assets": [] }, "variants": [], "searchKeywords": {}, "hasStagedChanges": true, "published": true, "key": "notebook", "createdAt": "2021-08-02T18:38:08.946Z", "lastModifiedAt": "2021-08-11T19:30:07.272Z" }]

  const component = render(<Card data={products} />)

  component.getByText('notebook')
})