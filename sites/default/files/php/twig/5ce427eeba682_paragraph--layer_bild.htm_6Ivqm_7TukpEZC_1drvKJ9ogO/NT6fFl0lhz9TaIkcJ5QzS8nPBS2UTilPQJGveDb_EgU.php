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

/* themes/custom/alex_theme/templates/paragraphs/paragraph--layer_bild.html.twig */
class __TwigTemplate_2462a5a27826248440c5eac7f0545a367a3bc8707390db5621c3aee1534eae62 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
            'paragraph' => [$this, 'block_paragraph'],
            'content' => [$this, 'block_content'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["set" => 2, "block" => 8, "if" => 17];
        $filters = ["clean_class" => 4];
        $functions = ["attach_library" => 31];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'block', 'if'],
                ['clean_class'],
                ['attach_library']
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
        // line 2
        $context["classes"] = [0 => "paragraph", 1 => ("paragraph--type--" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed($this->getAttribute(        // line 4
($context["paragraph"] ?? null), "bundle", [])))), 2 => ((        // line 5
($context["view_mode"] ?? null)) ? (("paragraph--view-mode--" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["view_mode"] ?? null))))) : (""))];
        // line 8
        $this->displayBlock('paragraph', $context, $blocks);
        // line 30
        echo "
";
        // line 31
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->attachLibrary("alex_theme/jqueryparallax-css"), "html", null, true);
        echo "
";
        // line 32
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->attachLibrary("alex_theme/jqueryparallax-js"), "html", null, true);
        echo "
";
    }

    // line 8
    public function block_paragraph($context, array $blocks = [])
    {
        // line 9
        echo "  <div";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
        echo ">
    ";
        // line 10
        $this->displayBlock('content', $context, $blocks);
        // line 28
        echo " </div>
";
    }

    // line 10
    public function block_content($context, array $blocks = [])
    {
        echo "          

<div id=\"parallax-wrapper\"> 
\t<div class=\"wrapper\"><div class=\"parallax-headline\">";
        // line 13
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_caption", [])), "html", null, true);
        echo "</div></div>
<div id=\"parallax\">      
<div id=\"scene\">

\t";
        // line 17
        if ($this->getAttribute(($context["content"] ?? null), "field_layer1", [])) {
            echo "<div class=\"layer layer-1\" data-depth=\"0.6\"><img class=\"at2x\" src=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_layer1", [])), "html", null, true);
            echo "\" alt=\"\"></div>";
        }
        // line 18
        echo "\t";
        if ($this->getAttribute(($context["content"] ?? null), "field_layer2", [])) {
            echo "<div class=\"layer layer-2\" data-depth=\"0.8\"><img class=\"at2x\" src=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_layer2", [])), "html", null, true);
            echo "\" alt=\"\"></div>";
        }
        // line 19
        echo "\t";
        if ($this->getAttribute(($context["content"] ?? null), "field_layer3", [])) {
            echo "<div class=\"layer layer-3\" data-depth=\"0.7\"><img class=\"at2x\" src=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_layer3", [])), "html", null, true);
            echo "\" alt=\"\"></div>";
        }
        // line 20
        echo "\t";
        if ($this->getAttribute(($context["content"] ?? null), "field_layer4", [])) {
            echo "<div class=\"layer layer-4\" data-depth=\"0.9\"><img class=\"at2x\" src=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_layer4", [])), "html", null, true);
            echo "\" alt=\"\"></div>";
        }
        // line 21
        echo "\t";
        if ($this->getAttribute(($context["content"] ?? null), "field_layer5", [])) {
            echo "<div class=\"layer layer-5\" data-depth=\"0.95\"><img class=\"at2x\" src=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_layer5", [])), "html", null, true);
            echo "\" alt=\"\"></div>";
        }
        // line 22
        echo "\t
</div>    
</div> 
</div>    
         
    ";
    }

    public function getTemplateName()
    {
        return "themes/custom/alex_theme/templates/paragraphs/paragraph--layer_bild.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  139 => 22,  132 => 21,  125 => 20,  118 => 19,  111 => 18,  105 => 17,  98 => 13,  91 => 10,  86 => 28,  84 => 10,  79 => 9,  76 => 8,  70 => 32,  66 => 31,  63 => 30,  61 => 8,  59 => 5,  58 => 4,  57 => 2,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/alex_theme/templates/paragraphs/paragraph--layer_bild.html.twig", "C:\\xampp\\htdocs\\cgift\\themes\\custom\\alex_theme\\templates\\paragraphs\\paragraph--layer_bild.html.twig");
    }
}
