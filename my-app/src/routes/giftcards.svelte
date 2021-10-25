<svelte:head>
	<title>Giftcards</title>
</svelte:head>


<script>
    import { onMount } from 'svelte';

    const accessToken = 'Bearer eyJraWQiOiI5MTYxZDA4Zi05ODhjLTRiYjItYTI5NS03ODc5NmQ2MzJlM2YiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2ODkzIiwiaXNzIjoiaHR0cHM6Ly9yZWxvYWRseS5hdXRoMC5jb20vIiwiaHR0cHM6Ly9yZWxvYWRseS5jb20vc2FuZGJveCI6ZmFsc2UsImh0dHBzOi8vcmVsb2FkbHkuY29tL3ByZXBhaWRVc2VySWQiOiI2ODkzIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXVkIjoiaHR0cHM6Ly9naWZ0Y2FyZHMucmVsb2FkbHkuY29tIiwibmJmIjoxNjMzNjAzMTYxLCJhenAiOiI2ODkzIiwic2NvcGUiOiJkZXZlbG9wZXIiLCJleHAiOjE2Mzg3OTA3NjEsImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6IjdjODIzY2EzLTcwYTQtNDY1Ny05YWIxLTVmZTkzMDljZjJmOSIsImlhdCI6MTYzMzYwMzE2MSwianRpIjoiMWQ0NTk5NDMtZjI1MS00YjMwLWIzNzUtMmI3ZDRjZWQzYWQyIn0.B5bSbVAoDdFZUgAX2V_HRCirF2qtOaA_kRk5_vva85c'

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