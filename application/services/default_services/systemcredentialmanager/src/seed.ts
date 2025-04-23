import * as fetch from 'node-fetch';

const credentials = {
    MONGO_URL : process.env.MONGO_DB_URL
}
export class SeedService {

    private ServiceFile;
    constructor() { 
        this.ServiceFile = 'ServicesFile';
    }

    public initKvData(vaultUrl, callback): void {
        // console.log(`credentials----->`, credentials);
        
        fetch(`${vaultUrl}/v1/sys/mounts/kv`, {
            method: 'POST',
            headers: {
                'X-Vault-Token': 'vault-geppetto-2021',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: '{"type": "kv", "options": {"version": "1"}}'
        }).then(data => {
            fetch(`${vaultUrl}/v1/kv/database/mongodb`, {
                method: 'POST',
                headers: {
                    'X-Vault-Token': 'vault-geppetto-2021',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(credentials)
            });
            callback('vaultsave');
        })

    }
   
 }

   
 

