let expenses = [];
let totalAmount = 0; 
const category_select = document.getElementById('category_select');
const inputAmount = document.getElementById('input_amount');
const InfoInput = document.getElementById('info');
const inputDate = document.getElementById('input_date');
const addbtn = document.getElementById('add_btn');
const expenseTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');

addbtn.addEventListener('click', function(){
    const category = category_select.value ;
    const info = InfoInput.value ;
    const amount = Number(inputAmount.value);
    const date = inputDate.value; 

    if(category === '' ){
        alert("Please select a category");
        return ;
    }
    if(isNaN(amount) || amount <= 0 ){
        alert("Please enter a valid amount");
        return ;
    }
    if(info === '' ){
        alert("Please enter a valid amount info");
        return ;
    }
    if(date === '' ){
        alert("Please select a date");
        return ;
    }
    expenses.push({category,amount,info,date});
    if(category === 'Income'){
        totalAmount += amount ;
    }
    if(category === 'Expense'){
        totalAmount -= amount ;
    }
    totalAmountCell.textContent = totalAmount;
    const newRow = newRow.insertRow(); 
    const categoryCell = newRow.insertCell();
    const AmountCell = newRow.insertCell();
    const infoCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expenses),1);
        if(category === 'Income'){
            totalAmount -= amount ;
        }
        if(category === 'Expense'){
            totalAmount += amount ;
        }
        totalAmountCell.textContent = totalAmount ;
        expenseTableBody.removeChild(new Row);
    })
    const expense = expenses[expenses.length-1];
    categoryCell.textContent = expense.category ;
    AmountCell.textContent = expense.amount ;
    infoCell.textContent = expense.info ;
    dateCell.textContent = expense.date ;
    deleteCell.appendChild(deleteBtn);

});
for(const expense of expenses){
    if(category === 'Income'){
        totalAmount += amount ;
    }
    if(category === 'Expense'){
        totalAmount -= amount ;
    }
    totalAmountCell.textContent = totalAmount;
    const newRow = expenseTableBody.insertRow(); 

    const categoryCell = expenseTableBody.insertCell();
    const AmountCell = newRow.insertCell();
    const infoCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expenses),1);
        if(category === 'Income'){
            totalAmount -= amount ;
        }
        if(category === 'Expense'){
            totalAmount += amount ;
        }
        totalAmountCell.textContent = totalAmount ;
        expenseTableBody.removeChild(new Row);
    })
    const expense = expenses[expenses.length-1];
    categoryCell.textContent = expense.category ;
    AmountCell.textContent = expense.amount ;
    infoCell.textContent = expense.info ;
    dateCell.textContent = expense.date ;
    deleteCell.appendChild(deleteBtn);
}