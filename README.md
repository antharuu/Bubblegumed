### Bubblegumed

Bubblegumed is an export of the concepts of the bubblegum CSS framework.

Thanks to this very small tool, you will be able to use the Bubblegum logic on Bootstrap or on any other CSS framework.

You will be able to use the Bubblegum syntax, and it will transform your code live when the page loads by turning it
into an HTML class and removing the Bubblegum attributes.

```html
<!-- Bubblegumed usage width bootstrap -->
<div _container>
    <div _row>
        <div _col="12">
            <h1 _text="info">Hello world</h1>
            <button _btn="! primary sm">I'm a super button</button>
        </div>
    </div>
</div>

<!-- Result -->
<div class="container">
    <div class="row">
        <div class="col-12">
            <h1 class="text-info">Hello world</h1>
            <button class="btn btn-primary btn-sm">I'm a super button</button>
        </div>
    </div>
</div>
```

You have no limitations, you can use this tool with anything you want. Just use this small javascript file.