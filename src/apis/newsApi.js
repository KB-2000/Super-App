import axios from 'axios'
export const getnewsDetails = async () => {
    try {
        const reqUrl = `https://newsapi.org/v2/everything?q=Apple&apiKey=a624f2b674c44e37b5b07aaba51f16a9`  
        const response = await axios.get(reqUrl)
        console.log(response.data.articles[1])
        return response.data.articles[1]
        
    } catch (error) {
        console.log("failed to fetch")
    }
}