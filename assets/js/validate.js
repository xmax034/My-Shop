"use strict";
const $ = document.querySelector.bind(document);
//Validation-Form
function Validator(formSelector) {      
    function getParent(element, selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
    const formRules = {};
    //Defined Rules  
    const validRules = {
        required: function(value) {
            return value ? undefined : 'Chưa nhập thông tin';
        },
        email: function(value) {
            const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return regex.test(value) ? undefined : 'Chưa nhập email chính xác';
        },
        min: function(min) {
            return function(value) {
                return value.length >= min ? undefined : `Nhập ít nhất ${min} kí tự`;
            }
        },
        max: function(max) {
            return function(value) {
                return value.length <= max ? undefined : `Nhập tối đa ${max} kí tự`;
            }
        },
        confirm: function(value) {
            const pass = formElement.querySelector('#password');
            return value === pass.value ? undefined : `Mật khẩu nhập lại không chính xác`;            
        }
    }
    //Handled Events
    const formElement = $(formSelector);
    if(formElement) {
        const inputs = formElement.querySelectorAll('[name][rules]');
        for( var input of inputs) {
            const rules = input.getAttribute('rules').split('|'); 
            for(var rule of rules) {
                var isRuleVal = rule.includes(':');
                if(isRuleVal) {
                    var ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                }
                var ruleFunct = validRules[rule];
                if(isRuleVal) {
                    ruleFunct = ruleFunct(ruleInfo[1]);
                }
                if(Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunct);
                } else {
                    formRules[input.name] = [ruleFunct];
                }                
            }
            input.onblur = handledValidate;
            input.oninput = handledClearError;
        }
    }
    function handledValidate(e) {
        var errorMess;
        var rules = formRules[e.target.name];
        rules.some((rule) => {
            errorMess = rule(e.target.value);
            return errorMess;
        });
        if(errorMess) {
            var formGroup = getParent(e.target, '.auth-form__group');
            if(formGroup) {
                formGroup.classList.add('invalid');
                var formMess = formGroup.querySelector('.auth-form__mess');
                if(formMess) {
                    formMess.innerText = errorMess;
                }
            }
        }
        return !errorMess;
    }
    function handledClearError(e) {
        var formGroup = getParent(e.target, '.auth-form__group');
        if(formGroup.classList.contains('invalid')) {
            formGroup.classList.remove('invalid');
            var formMess = formGroup.querySelector('.auth-form__mess');
            if(formMess) {
                formMess.innerText = '';
            }
        }
    }
    //Submit-Form    
    formElement.onsubmit = (e) => {
        e.preventDefault();        
        const inputs = formElement.querySelectorAll('[name][rules]');
        var isValid = true;
        for(var input of inputs) {
            if(!handledValidate({target: input})) {
                isValid = false;
            }
        }        
        if(isValid) {            
            if(typeof this.onSubmit === 'function') {                
                var enabInputs = formElement.querySelectorAll('[name]');
                var formVals = Array.from(enabInputs).reduce((vals, input) => {
                    switch (input.type) {                            
                        case 'radio':
                            vals[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;                                
                            break;                            
                        case 'checkbox':
                            if(!input.matches(':checked')) {
                                vals[input.name] = '';
                                return vals;
                            }
                            if(!Array.isArray(vals[input.name])) {
                                vals[input.name] = [];
                            }
                            vals[input.name].push(input.value);
                            break;                            
                        case 'file':
                            vals[input.name] = input.files;
                            break;
                        default:
                            vals[input.name] = input.value;
                    }
                    return vals;
                }, {});
                this.onSubmit(formVals);                    
            } else {
                formElement.submit();
            }            
        }
    }
}

//Auth-Form
const backBtn = $('.btn-form__controls-black');
backBtn.onclick = function() {
    return location.href="./index.html";
}
