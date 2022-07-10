//method to submit the form data using ajax
{
    console.log("hello");
    let createPost = function () {
        let newPostForm = $('#new-post-form');
        newPostForm.submit(function (e) {
            e.preventDefault();
            $.ajax({
                type: 'post',
                url: '/posts/create',
                data: newPostForm.serialize(),
                //it converts the form data into json(key-value pairs)
                success: function (data) {
                    console.log(data);
                }, error: function (error) {
                    console.log(error.responseText);
                }
            })
        });
    }
}