use yew::prelude::*;
use pulldown_cmark::{html, Parser};
use markdown;

pub struct Context{}

pub struct  Model {
  markdown: Option<String>
}

pub enum Msg {
  Ignore
}

const mk: &str = include_str!("index.md");

impl Component<Context> for Model {
  type Properties = ();
  type Msg = Msg;

  fn create(_: Self::Properties, _: &mut Env<Context, Self>) -> Self {
    Model {
      markdown: Some(String::from(mk))
    }
  }

  fn update(&mut self, msg: Self::Msg, _ : &mut Env<Context, Self>) -> ShouldRender {
    match msg {
      Msg::Ignore => false
    }
  }
}

impl Model {
  fn view_data(&self) -> Html<Context, Model> {
    if let Some(ref value) = self.markdown {
      // let parser = Parser::new(&value);
      // let mut html_buf = String::new();
      // html::push_html(&mut html_buf, parser);

      html! {
        <article> { markdown::render(value) } </article>
      }
    } else {
      html! {
        <p>{ "Data hasn't fetched yet." }</p>
      }
    }
  }
}

impl Renderable<Context, Model> for Model {
  fn view(&self) -> Html<Context, Self> {
    self.view_data()
  }
}

