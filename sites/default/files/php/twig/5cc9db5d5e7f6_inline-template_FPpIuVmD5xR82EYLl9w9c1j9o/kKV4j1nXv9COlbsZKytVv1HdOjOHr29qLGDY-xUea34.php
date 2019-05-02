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

/* {# inline_template_start #}<strong>{{ title }}</strong><br /><p>{{ body }}</p><p><a href="mailto:{{ field_e_mail }}">{{ field_e_mail }}</a><br /><a href="tel:{{ field_telefonnummer }}" type="text/javascript">{{ field_telefonnummer }}</a><br /><span>{{ field_faxnummer }}</span></p> */
class __TwigTemplate_87ecd70621a4a67e13f0d948efd3754c328dd25ed4f657c9da36c72bc4bcb667 extends \Twig\Template
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
        echo "</strong><br /><p>";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["body"] ?? null)), "html", null, true);
        echo "</p><p><a href=\"mailto:";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_e_mail"] ?? null)), "html", null, true);
        echo "\">";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_e_mail"] ?? null)), "html", null, true);
        echo "</a><br /><a href=\"tel:";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_telefonnummer"] ?? null)), "html", null, true);
        echo "\" type=\"text/javascript\">";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_telefonnummer"] ?? null)), "html", null, true);
        echo "</a><br /><span>";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_faxnummer"] ?? null)), "html", null, true);
        echo "</span></p>";
    }

    public function getTemplateName()
    {
        return "{# inline_template_start #}<strong>{{ title }}</strong><br /><p>{{ body }}</p><p><a href=\"mailto:{{ field_e_mail }}\">{{ field_e_mail }}</a><br /><a href=\"tel:{{ field_telefonnummer }}\" type=\"text/javascript\">{{ field_telefonnummer }}</a><br /><span>{{ field_faxnummer }}</span></p>";
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
        return new Source("", "{# inline_template_start #}<strong>{{ title }}</strong><br /><p>{{ body }}</p><p><a href=\"mailto:{{ field_e_mail }}\">{{ field_e_mail }}</a><br /><a href=\"tel:{{ field_telefonnummer }}\" type=\"text/javascript\">{{ field_telefonnummer }}</a><br /><span>{{ field_faxnummer }}</span></p>", "");
    }
}
