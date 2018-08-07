export default {
  form: `
<div style="position: relative;">
  <nav aria-label="navigation">
    <ul class="pagination">
      {% panels.forEach(function(panel, index) { %}
      <li class="page-item{{currentPage === index ? ' active' : ''}}" style="">
        <span class="page-link" ref="{{wizardKey}}-link">{{panel.title}}</span>
      </li>
      {% }) %}
    </ul>
  </nav>
  <div class="wizard-page" ref="{{wizardKey}}">
    {{components}}
  </div>
  <ul class="list-inline">
    {% if (buttons.cancel) { %}
    <li class="list-inline-item">
      <button class="btn btn-secondary btn-wizard-nav-cancel" ref="{{wizardKey}}-cancel">{{t('cancel')}}</button>
    </li>
    {% } %}
    {% if (buttons.previous) { %}
    <li class="list-inline-item">
      <button class="btn btn-primary btn-wizard-nav-previous" ref="{{wizardKey}}-previous">{{t('previous')}}</button>
    </li>
    {% } %}
    {% if (buttons.next) { %}
    <li class="list-inline-item">
      <button class="btn btn-primary btn-wizard-nav-next" ref="{{wizardKey}}-next">{{t('next')}}</button>
    </li>
    {% } %}
    {% if (buttons.submit) { %}
    <li class="list-inline-item">
      <button class="btn btn-primary btn-wizard-nav-submit" ref="{{wizardKey}}-submit">{{t('submit')}}</button>
    </li>
    {% } %}
  </ul>
</div>
`,
};