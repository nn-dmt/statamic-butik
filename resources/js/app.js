import ProductListing from './components/products/Listing';
import CountryListing from './components/countries/Listing';
import TaxesListing from './components/taxes/Listing';
import OrdersListing from './components/orders/Listing';

import ShippingOverview from "./components/shipping/Overview";

import MoneyFieldtype from './components/fieldtypes/moneyFieldtype';
import TaxFieldtype from './components/fieldtypes/taxFieldtype';

Statamic.booting(() => {
    // Listings
    Statamic.$components.register('butik-product-list', ProductListing);
    Statamic.$components.register('butik-country-list', CountryListing);
    Statamic.$components.register('butik-tax-list', TaxesListing);
    Statamic.$components.register('butik-order-list', OrdersListing);

    Statamic.$components.register('butik-shipping-overview', ShippingOverview);

    // Fieldtypes
    Statamic.$components.register('money-fieldtype', MoneyFieldtype);
    Statamic.$components.register('tax-fieldtype', TaxFieldtype);
});
