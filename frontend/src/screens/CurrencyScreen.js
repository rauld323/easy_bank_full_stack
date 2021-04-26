import './CurrencyScreen.css'
import Currency from '../components/Currency';

const CurrencyScreen = () => {
	return(
		<div className="currencyScreen">
			<h2 className="currencyScreen_title">Currencies based on the EURO</h2>
			<div className="currencyScreen_currency">
				<Currency />
				<Currency />
				<Currency />
				<Currency />
				<Currency />
				<Currency />
				<Currency />
				<Currency />
			</div>
		</div>


	)
}

export default CurrencyScreen
