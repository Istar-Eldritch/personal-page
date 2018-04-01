
#[macro_use]
extern crate yew;
extern crate pulldown_cmark;

use yew::prelude::App;

mod markdown;
mod markdown_page;

use markdown_page::{Context, Model};

pub fn main() {
  yew::initialize();
  let context = Context{};

  let app: App<Context, Model> = App::new(context);

  app.mount_to_body();

  yew::run_loop();
}
