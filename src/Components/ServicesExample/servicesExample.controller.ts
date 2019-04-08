import MessageActions from '../../Actions/messages';

class ServicesExampleController {
    [x: string]: any;

    private unsubscribe: () => void;

    public constructor($q: any, MessageService: any, $ngRedux: any) {
        this.unsubscribe = $ngRedux.connect(this.mapStateToThis, MessageActions)(this);

        const infoList = [];
        infoList.push($q.when(MessageService.GetAllMessages()));

        $q.all(infoList)
        .then((response: any) => {
            response[0].data.forEach((item: any) => {
                const search = this.messages.find((x: any) => x.messageId === item.messageId);
                if (typeof(search) === 'undefined') {
                    this.addMessage(item);
                }
            });
        });
    }

    public $onDestroy() {
        this.unsubscribe();
    }

    public mapStateToThis(state: any) {
        return {
            messages: state.messages
        };
    }
}

ServicesExampleController.$inject = ['$q', 'MessageService', '$ngRedux'];

export default ServicesExampleController;
