import FormActions from '../../Actions/forms';

class Forms {
    [x: string]: any;

    private unsubscribe: () => void;
    private _scope: any;
    private _toaster: any;
    private _DefaultFormModel: {
        Age: null,
        Email: '',
        FullName: ''
    };

    constructor($ngRedux: any, $scope: any, toaster: any) {
        this.unsubscribe = $ngRedux.connect(this.mapStateToThis, FormActions)(this);
        this._scope = $scope;
        this._toaster = toaster;
        this._scope.FormModel = this._DefaultFormModel;
    }

    public clear() {
        this._scope.FormModel = this._DefaultFormModel;
        this._scope.userForm.$setPristine();
    }

    public $onDestroy() {
        this.unsubscribe();
    }

    public sendForm(isValid: boolean) {
        if (isValid) {
            this.resetForm();
            this.submitForm(this._scope.FormModel);
            this._toaster.pop('success', '', 'Form submitted');
            this.clear();
        }
    }

    public mapStateToThis(state: any){
        return {
            forms: state.forms
        };
    }
}

Forms.$inject = ['$ngRedux', '$scope', 'toaster'];

export default Forms;
