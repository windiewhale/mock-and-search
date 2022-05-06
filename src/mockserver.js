import { createServer } from "miragejs";

function mockServer() {
  let server = createServer(
        {
            routes(){
                this.urlPrefix = "https://www.bullshit.com";
                this.namespace = "/v1/api";
                this.timing = 2000;

                this.get("/books", () => {
                    return [
                        {title: "Dune", author: "Frank Herbert", year: 1968},
                        {title: "Ministry for the future", author: "Kim Stanley Robinson", year: 2020},
                        {title: "Teljesség felé", author: "Weöres Sándor", year: 1945},

                    ]
                })

            }
        }    
  );


  
  return server

}

export default mockServer