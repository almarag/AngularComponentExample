export default ['$http', ($http: any) => {

    return {
        GetAllMessages: () => {
            return $http.get('/Mocks/messages.json');
        }
    };
}];
