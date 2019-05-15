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

/* themes/custom/alex_theme/templates/paragraphs/paragraph--text_und_bild.html.twig */
class __TwigTemplate_14587c38088fe7e66ce8774d09ccb20ab0246da6a1809b1e3d2cfecac7aa8890 extends \Twig\Template
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
        $tags = ["set" => 2, "block" => 11, "if" => 17];
        $filters = ["clean_class" => 4, "render" => 9];
        $functions = ["attach_library" => 8];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'block', 'if'],
                ['clean_class', 'render'],
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
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->attachLibrary("alex_theme/textbild-css"), "html", null, true);
        echo "
";
        // line 9
        $context["ausrichtung"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_ausrichtung", [])));
        // line 10
        $context["design"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_design", [])));
        // line 11
        $this->displayBlock('paragraph', $context, $blocks);
        // line 38
        echo "<div class=\"clear\"></div>

";
    }

    // line 11
    public function block_paragraph($context, array $blocks = [])
    {
        // line 12
        echo "  <div";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
        echo ">
  <div class=\"wrapper\">
  <div class=\"flexbox-container\">
    ";
        // line 15
        $this->displayBlock('content', $context, $blocks);
        // line 33
        echo "  </div>
  </div>
</div>
</div>
";
    }

    // line 15
    public function block_content($context, array $blocks = [])
    {
        // line 16
        echo "
    ";
        // line 17
        if ((($context["ausrichtung"] ?? null) == "links")) {
            // line 18
            echo "        <div class=\"image-column image-column-left\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_image", [])), "html", null, true);
            echo "</div>
    ";
        }
        // line 20
        echo "    ";
        if ((($context["ausrichtung"] ?? null) == "rechts")) {
            // line 21
            echo "        <div class=\"image-column image-column-right\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_image", [])), "html", null, true);
            echo "</div>
    ";
        }
        // line 23
        echo "
      ";
        // line 24
        if ((($context["ausrichtung"] ?? null) == "links")) {
            // line 25
            echo "        <div class=\"text-column text-column-right\">
    ";
        }
        // line 27
        echo "    ";
        if ((($context["ausrichtung"] ?? null) == "rechts")) {
            // line 28
            echo "        <div class=\"text-column text-column-left\">
    ";
        }
        // line 30
        echo "          ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_text", [])), "html", null, true);
        echo "
        </div>
    ";
    }

    public function getTemplateName()
    {
        return "themes/custom/alex_theme/templates/paragraphs/paragraph--text_und_bild.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  136 => 30,  132 => 28,  129 => 27,  125 => 25,  123 => 24,  120 => 23,  114 => 21,  111 => 20,  105 => 18,  103 => 17,  100 => 16,  97 => 15,  89 => 33,  87 => 15,  80 => 12,  77 => 11,  71 => 38,  69 => 11,  67 => 10,  65 => 9,  61 => 8,  59 => 5,  58 => 4,  57 => 2,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/alex_theme/templates/paragraphs/paragraph--text_und_bild.html.twig", "/Applications/MAMP/htdocs/cgift/themes/custom/alex_theme/templates/paragraphs/paragraph--text_und_bild.html.twig");
    }
}
