var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var formUsers = document.getElementById('form-add-users');
var tableUsers = document.getElementById('table-users');
var createUser = function (e) { return __awaiter(_this, void 0, void 0, function () {
    var formU, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                e.preventDefault();
                formU = e.target;
                user = {
                    name: formU.name.value,
                    email: formU.email.value,
                    pass: formU.pass.value
                };
                return [4 /*yield*/, addUser(user)];
            case 1:
                _a.sent();
                loadUsers();
                return [2 /*return*/];
        }
    });
}); };
formUsers.addEventListener('submit', createUser);
var loadUsers = function () { return __awaiter(_this, void 0, void 0, function () {
    var users, tbody;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getUsers()];
            case 1:
                users = _a.sent();
                tbody = tableUsers.querySelector('tbody');
                tbody.innerHTML = '';
                users.forEach(function (us) {
                    var tr = document.createElement('tr');
                    var tdName = document.createElement('td');
                    var tdEmail = document.createElement('td');
                    var txtName = document.createTextNode(us.name);
                    var txtEmail = document.createTextNode(us.email);
                    var tdPass = document.createElement('td');
                    var textPass = document.createTextNode(us.pass);
                    tr.appendChild(tdName);
                    tr.appendChild(tdEmail);
                    tr.appendChild(tdPass);
                    tdName.appendChild(txtName);
                    tdEmail.appendChild(txtEmail);
                    tdPass.appendChild(textPass);
                    tbody.appendChild(tr);
                });
                return [2 /*return*/];
        }
    });
}); };
loadUsers();
// 1 - Crear el formulario para agregar categoras.
// Los controles (input, textarea, select) tienen que tener un name.
// 2 - Quedar a la escucha de un evento submit
// 3 - Crear una funcin que se invoque al producirse el evento.
// 4 - Armar un objeto con los datos del formulario y enviar a una funcion que lo guarde en la DB
// 5 - Armar una funcin que tome los datos del formulario y realizar la request a la DB
// 6 - La respuesta de la base de datos deberiamos tratarla de alguna manera. Vamos a utilizar 
//     la funcin de ayuda que convierte la respuesta en un array.
