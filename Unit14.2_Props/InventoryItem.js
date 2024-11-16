/* TODO: Take the props. Set defaults to the quantity. */
function InventoryItem ({name, type, quantity = 0, price = 0})
{
	const lowStock = 5;
	const highValue = 1000;
	const subTotal = price * quantity;

	return (
		<div>
			<h2><b>{name}</b> - ({type})</h2>
			{
				quantity < lowStock
				&&
				<p>Low Stock!</p>
				
			}
			{
				subTotal > highValue
				&&
				<p> High value!</p>
			}
		</div>
	);
}
