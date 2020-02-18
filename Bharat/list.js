<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <style>
        body{ background: linear-gradient(to top, #33ccff 0%, #ff99cc 100%); background-repeat: no-repeat;}
        a {color: red;}
    </style>
    <title>Document</title>
</head>
<body>
    <h1 class="text-primary p-4 text-center">Listing-Data</h1>
    <form id="loginpage" class="bg-light text-dark text-center p4" onsubmit="event.preventDefault()" >
        
        <table width="100%" border="2">
            <tr >
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Date Of Birth</th>
                <th>Status</th>
                <th>Action </th>
                <th>Action</th>
                
            </tr>
            <tbody id="tablebody">

            </tbody>
        </table>
        <button  type="button"  class="p2 m-4 btn btn-primary" onclick="addtrainee();">ADD TRAINEE</button>
    </form>
    <script src="js/list.js"></script>
</body>
</html>
