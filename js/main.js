
const drop_down = () => {
    if (document.getElementById('drop_1').style.height=='200px'){
    document.getElementById('drop_1').style.height='0';
    document.getElementById('sub_drop_1').style.width='0px';
    document.getElementById('sub_drop_2').style.width='0px';
    document.getElementById('sub_drop_3').style.width='0px';
    document.getElementById('sub_drop_4').style.width='0px';
    document.getElementById('left_drop_1').innerHTML='Coastal <i class="fas fa-caret-right"></i>';
    document.getElementById('left_drop_2').innerHTML='Desert <i class="fas fa-caret-right"></i>';
    document.getElementById('left_drop_3').innerHTML='Hill Stations <i class="fas fa-caret-right"></i>';
    document.getElementById('left_drop_4').innerHTML='Plains <i class="fas fa-caret-right"></i>';
    document.getElementById('select_1').innerHTML='Select Region <i class="fas fa-caret-down"></i>';
    }
    else{
        document.getElementById('drop_1').style.height='200px';
        document.getElementById('select_1').innerHTML='Select Region <i class="fas fa-caret-up"></i>';
    }
}
const sub_drop_1 = () => {
    if (document.getElementById('sub_drop_1').style.width=='280px'){
        document.getElementById('sub_drop_1').style.width='0px';
        document.getElementById('left_drop_1').innerHTML='Coastal <i class="fas fa-caret-right"></i>';
    }
    else{
        document.getElementById('left_drop_1').innerHTML='Coastal <i class="fas fa-caret-left"></i>';
        document.getElementById('left_drop_2').innerHTML='Desert <i class="fas fa-caret-right"></i>';
        document.getElementById('left_drop_3').innerHTML='Hill Stations <i class="fas fa-caret-right"></i>';
        document.getElementById('left_drop_4').innerHTML='Plains <i class="fas fa-caret-right"></i>';
        document.getElementById('sub_drop_1').style.width='280px';
        document.getElementById('sub_drop_2').style.width='0px';
        document.getElementById('sub_drop_3').style.width='0px';
        document.getElementById('sub_drop_4').style.width='0px';
    }
}
const sub_drop_2 = () => {
    if (document.getElementById('sub_drop_2').style.width=='280px'){
        document.getElementById('sub_drop_2').style.width='0px';
        document.getElementById('left_drop_2').innerHTML='Desert <i class="fas fa-caret-right"></i>';
    }
    else{
        document.getElementById('sub_drop_2').style.width='280px';
        document.getElementById('left_drop_2').innerHTML='Desert <i class="fas fa-caret-left"></i>';
        document.getElementById('left_drop_1').innerHTML='Coastal <i class="fas fa-caret-right"></i>';
        document.getElementById('left_drop_3').innerHTML='Hill Stations <i class="fas fa-caret-right"></i>';
        document.getElementById('left_drop_4').innerHTML='Plains <i class="fas fa-caret-right"></i>';
        document.getElementById('sub_drop_1').style.width='0px';
        document.getElementById('sub_drop_3').style.width='0px';
        document.getElementById('sub_drop_4').style.width='0px';
    }
}
const sub_drop_3 = () => {
    if (document.getElementById('sub_drop_3').style.width=='280px'){
        document.getElementById('sub_drop_3').style.width='0px';
        document.getElementById('left_drop_3').innerHTML='Hill Stations <i class="fas fa-caret-right"></i>';
    }
    else{
        document.getElementById('sub_drop_3').style.width='280px';
        document.getElementById('left_drop_3').innerHTML='Hill Stations <i class="fas fa-caret-left"></i>';
        document.getElementById('left_drop_1').innerHTML='Coastal <i class="fas fa-caret-right"></i>';
        document.getElementById('left_drop_2').innerHTML='Desert <i class="fas fa-caret-right"></i>';
        document.getElementById('left_drop_4').innerHTML='Plains <i class="fas fa-caret-right"></i>';
        document.getElementById('sub_drop_2').style.width='0px';
        document.getElementById('sub_drop_1').style.width='0px';
        document.getElementById('sub_drop_4').style.width='0px';
    }
}
const sub_drop_4 = () => {
    if (document.getElementById('sub_drop_4').style.width=='280px'){
    document.getElementById('sub_drop_4').style.width='0px';
    document.getElementById('left_drop_4').innerHTML='Plains <i class="fas fa-caret-right"></i>';
}
else{
    document.getElementById('sub_drop_4').style.width='280px';
    document.getElementById('left_drop_4').innerHTML='Plains <i class="fas fa-caret-left"></i>';
    document.getElementById('left_drop_1').innerHTML='Coastal <i class="fas fa-caret-right"></i>';
    document.getElementById('left_drop_2').innerHTML='Desert <i class="fas fa-caret-right"></i>';
    document.getElementById('left_drop_3').innerHTML='Hill Stations <i class="fas fa-caret-right"></i>';
    document.getElementById('sub_drop_2').style.width='0px';
    document.getElementById('sub_drop_3').style.width='0px';
    document.getElementById('sub_drop_1').style.width='0px';
}
}
