


// console.log("клик по кнопке");
// button_arrow.classList.toggle('dropdown__button_arrow-active');

    


// Полифилл для метода forEach для NodeList
        if (window.NodeList && !NodeList.prototype.forEach) {
            NodeList.prototype.forEach = function (callback, thisArg) {
                thisArg = thisArg || window;
                for (var i = 0; i < this.length; i++) {
                    callback.call(thisArg, this[i], i, this);
                }
            };
        }

       
        document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
            const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
            const dropDownBtnMb = dropDownWrapper.querySelector('.dropdown__button_mb');
            
            const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
            const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
            const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');            
            const button_arrow = document.querySelector('.dropdown__button_arrow');
            // const pseInp = document.querySelector('.psevdo-input');
            // const dropDownInputMb = dropDownWrapper.querySelector('.dropdown__input-hidden-mb');
            dropDownInput.value = dropDownBtn.innerText;
            // dropDownInputMb.value = dropDownBtnMb.innerText;
            // лиШка
            // const button_clatc = document.querySelectorAll('.dropdown__list-item');
            // for (var i = 0; i < button_clatc.length; i++) {}
            // function (bt) {}
            
            // Клик по кнопке. Открыть/Закрыть select
            dropDownBtn.addEventListener('click', function (e) {
                dropDownList.classList.toggle('dropdown__list--visible');
                button_arrow.classList.toggle('dropdown__button_arrow-active');
                this.classList.add('dropdown__button--active');
            });
            // e.target.textContent
            // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
            dropDownListItems.forEach(function (listItem) {
                listItem.addEventListener('click', function (e) {
                    e.stopPropagation();
                    dropDownBtn.innerText = this.innerText;
                    dropDownBtn.focus();
                    dropDownInput.value = this.dataset.value;
                    dropDownList.classList.remove('dropdown__list--visible');
                    button_arrow.classList.remove('dropdown__button_arrow-active');
                });

            });
        
            // Клик снаружи дропдауна. Закрыть дропдаун
            document.addEventListener('click', function (e) {
                if (e.target !== dropDownBtn) {
                    dropDownBtn.classList.remove('dropdown__button--active');
                    dropDownList.classList.remove('dropdown__list--visible');
                }
            });
        
            // Нажатие на Tab или Escape. Закрыть дропдаун
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Tab' || e.key === 'Escape') {
                    dropDownBtn.classList.remove('dropdown__button--active');
                    dropDownList.classList.remove('dropdown__list--visible');
                }
            });
        });
        
        