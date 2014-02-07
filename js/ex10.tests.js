describe("SideBar", function() {
  
  it("should render an <li> element", function() {
    
    var sample_data = {
      design_name : "Garments",
      design_url : "/220/",
      designer_name : "Dan Mall",
      designer_url : "http://danielmall.com/"
    };

    var sideBar = new SideBar();

    var proper_html = '<li>\n\
  <a href="/220/" class="design-name">Garments</a>\n\
  by\n\
  <a href="http://danielmall.com/" class="designer-name">Dan Mall</a>\n\
</li>';
    
    expect(sideBar.render()).toBe(proper_html);
  });

});

describe("ButtChanger", function() {
  
  it("should change text to 'Butt'", function() {
    
    var samples = $('.actually_a_butt');
    expect(samples.length).not.toBe(0);

    var sample = samples.first();
    var initial_text = sample.html();

    // simulate mouseover
    sample.mouseover();
    expect(sample.html()).toBe("Butt");

    // simulate mouseout
    sample.mouseout();
    expect(sample.html()).toBe(initial_text);
  });

});