import axios from "axios";
const apiEndPoint = 'https://artisthat.herokuapp.com/userapp/';



export const Login = async (data) => {
    try {
        const response = await axios.post(apiEndPoint + "signin", {
            email: data.email,
            password: data.password
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const userSignup = async (data) => {
    try {
        const response = await axios.post('https://artisthat.herokuapp.com/userapp/signup', {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password,
            countryCode: data.country_code,
            termsAndConditions: data.terms_and_conditions,
            promotionalEmail: data.send_no_email,
            phone: data.mobile_number,
        });
        return response.data;
    } catch (error) {
        console.log({ error });
    }
};

export const createProfile = async (data, Id) => {
    try {
        const response = await axios.post(`https://artisthat.herokuapp.com/artist/signupAsArtist/${Id}/`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const resetPassword = async (updatedPassword, token, slug) => {
    console.log(updatedPassword, token, 'this is udpate details')
    try {
        const response = await axios.post(`https://artisthat.herokuapp.com/userapp/change_password/${slug}/`, updatedPassword,
            {
                headers: {
                    Authorization: `Token ${token}`
                }
            }
        )
        console.log(response, 'tlksldfls')
        return response;
    }
    catch (error) {
        console.log({ error });
    }
};

export const updateArtist = async (artistData, userId) => {
    try {
        const response = await axios.post(`https://artisthat.herokuapp.com/artist/updateArtist/${userId}`, artistData);
        return response;
    }
    catch (error) {
        console.log(error);
    }
}
export const socialLogin = async (data) => {
    // console.log(data);
    try {
        const response = await axios.post(apiEndPoint + "google_signinapi/", data);
       
        return response;
    } catch (error) {
        console.log(error);
    }
};