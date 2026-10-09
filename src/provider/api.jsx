const path = "https://steam-data-two.vercel.app/api"

async function getData(endpoint) {
    return fetch(`${path}/${endpoint}`)
        .then(data => data.json())
}

export { getData }