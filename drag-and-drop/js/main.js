const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');
const actives = document.querySelectorAll('.fill');

// Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empties and call drag events
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

for (const active of actives) {
    active.parentNode.className = 'active';
}

// Drag Functions
function dragStart() {
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
    this.className = 'active';
}

function dragEnter(e) {
    e.preventDefault();
    this.append(fill);
}

function dragLeave() {
    this.className = 'empty';
}

function dragDrop() {
    this.className = 'active';
    this.append(fill);
}