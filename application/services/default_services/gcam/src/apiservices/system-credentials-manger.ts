import { ApiAdapter } from '../config/api-adapter';
import { Constants } from '../config/constants';


export class SCMService {

    public static scmData(callback) {
        console.log(`Fetching DBUrl from SystemCredentialManager`);
        
        setTimeout(apiServiceCall, 30000);
        function apiServiceCall() {
            new ApiAdapter().get(`${Constants.apiGatewayUrl}/web/scm`).then(
                (data:any) => {
                    data.response.json().then(result => {
                        callback(result);
                    })
                }).catch(error => {
                    callback(error)

                });
        }
    }

}