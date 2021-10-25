<svelte:head>
	<title>Giftcards</title>
</svelte:head>


<script>
    import { onMount } from 'svelte';

    const accessToken = 'Bearer ACCESS_TOKEN_HERE'

    let results = [];

    onMount(() => {
        getGiftCards();
    })

    let headers = {
        'Accept' : 'application/com.reloadly.giftcards-v1+json',
        'Authorization' : accessToken
    }

    const getGiftCards = async () => {
        const res = await fetch('https://giftcards.reloadly.com/countries/es/products', {
            method: 'GET',
            headers: headers
        });
        const json = await res.json();
        results = json
    };
    
</script>

<main class= 'response'>
    {#each results as result}
    <div class="data">
        <img class="product_image" src="{result.logoUrls[0]}" alt="gift card images" width="200px"/>
        <p class="product_name">{result.productName}</p>
        <p class="currency_code">Currency: {result.recipientCurrencyCode}</p>
        <p class="redeem_instructions">Redeem Instructions: {result.redeemInstruction.concise}</p>
    </div>
    {/each}
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

    .response {
    margin-top: 100px;
    width: 100%;
    display: flex;
	flex-direction: row;
    flex-wrap: wrap;

    }
.data {
    font-family: 'Lato', sans-serif;
    margin: 20px;
    padding: 20px;
    border-radius: 15px;
	background-color: #242D3D;
	color: #1EBAD5;
	display: flex;
	flex-direction: row;
    flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	text-align: center;
    width: 25%;
}

.product_name {
    width: 70%;
    color: #4dd2ff;
}
.currency_code {
    color: #4dd2ff;
}
.redeem_instructions {
    color: #4dd2ff;
}

.product_image {
    border-radius: 5px;
}
</style>
