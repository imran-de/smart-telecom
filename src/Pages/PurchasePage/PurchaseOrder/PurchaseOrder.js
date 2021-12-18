import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import ProductAvailable from '../ProductAvailable/ProductAvailable';
import PurchaseHeader from '../PurchaseHeader/PurchaseHeader';

const PurchaseOrder = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <PurchaseHeader date={date} setDate={setDate}></PurchaseHeader>
            <ProductAvailable date={date}></ProductAvailable>
        </div>
    );
};

export default PurchaseOrder;