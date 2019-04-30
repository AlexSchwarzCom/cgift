<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* {# inline_template_start #}<h2>Kontaktdaten</h2><strong>{{ title }}</strong><br /><p>{{ body }}</p><p><a href="mailto:{{ field_e_mail }}">{{ field_e_mail }}</a><br /><a href="tel:+4940466668112" type="text/javascript">{{ field_telefonnummer }}</a></p></div> */
class __TwigTemplate_ee9c9dcf33da58f582164b6925a705c34d703552df5e9978c94c366f7e4c79d3 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = [];
        $filters = [];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                [],
                [],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<h2>Kontaktdaten</h2><strong>";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null)), "html", null, true);
        echo "</strong><br /><p>";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["body"] ?? null)), "html", null, true);
        echo "</p><p><a href=\"mailto:";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_e_mail"] ?? null)), "html", null, true);
        echo "\">";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_e_mail"] ?? null)), "html", null, true);
        echo "</a><br /><a href=\"tel:+4940466668112\" type=\"text/javascript\">";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_telefonnummer"] ?? null)), "html", null, true);
        echo "</a></p></div>";
    }

    public function getTemplateName()
    {
        return "{# inline_template_start #}<h2>Kontaktdaten</h2><strong>{{ title }}</strong><br /><p>{{ body }}</p><p><a href=\"mailto:{{ field_e_mail }}\">{{ field_e_mail }}</a><br /><a href=\"tel:+4940466668112\" type=\"text/javascript\">{{ field_telefonnummer }}</a></p></div>";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "{# inline_template_start #}<h2>Kontaktdaten</h2><strong>{{ title }}</strong><br /><p>{{ body }}</p><p><a href=\"mailto:{{ field_e_mail }}\">{{ field_e_mail }}</a><br /><a href=\"tel:+4940466668112\" type=\"text/javascript\">{{ field_telefonnummer }}</a></p></div>", "");
    }
}
