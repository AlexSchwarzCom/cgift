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

/* {# inline_template_start #}<strong>{{ title }}</strong>{{ body }}<p>Telefon <a href="tel:{{ field_telefonnummer }}" type="text/javascript"> {{ field_telefonnummer }}</a><br /><span>Fax {{ field_faxnummer }}</span></p><p>E-Mail <a href="mailto:{{ field_e_mail }}">{{ field_e_mail }}</a></p> */
class __TwigTemplate_d2f0acbf28a7a82dda6eac41af1c17a3f805ae7c8a0858325d4781c523e051c3 extends \Twig\Template
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
        echo "<strong>";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null)), "html", null, true);
        echo "</strong>";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["body"] ?? null)), "html", null, true);
        echo "<p>Telefon <a href=\"tel:";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_telefonnummer"] ?? null)), "html", null, true);
        echo "\" type=\"text/javascript\"> ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_telefonnummer"] ?? null)), "html", null, true);
        echo "</a><br /><span>Fax ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_faxnummer"] ?? null)), "html", null, true);
        echo "</span></p><p>E-Mail <a href=\"mailto:";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_e_mail"] ?? null)), "html", null, true);
        echo "\">";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_e_mail"] ?? null)), "html", null, true);
        echo "</a></p>";
    }

    public function getTemplateName()
    {
        return "{# inline_template_start #}<strong>{{ title }}</strong>{{ body }}<p>Telefon <a href=\"tel:{{ field_telefonnummer }}\" type=\"text/javascript\"> {{ field_telefonnummer }}</a><br /><span>Fax {{ field_faxnummer }}</span></p><p>E-Mail <a href=\"mailto:{{ field_e_mail }}\">{{ field_e_mail }}</a></p>";
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
        return new Source("", "{# inline_template_start #}<strong>{{ title }}</strong>{{ body }}<p>Telefon <a href=\"tel:{{ field_telefonnummer }}\" type=\"text/javascript\"> {{ field_telefonnummer }}</a><br /><span>Fax {{ field_faxnummer }}</span></p><p>E-Mail <a href=\"mailto:{{ field_e_mail }}\">{{ field_e_mail }}</a></p>", "");
    }
}
