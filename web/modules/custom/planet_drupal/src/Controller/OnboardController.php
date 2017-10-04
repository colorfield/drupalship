<?php

namespace Drupal\planet_drupal\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Link;
use Drupal\Core\Url;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\entity_tools\EntityTools;

/**
 * Class OnboardController.
 */
class OnboardController extends ControllerBase {

  /**
   * Drupal\entity_tools\EntityService definition.
   *
   * @var \Drupal\entity_tools\EntityTools
   */
  protected $entityService;

  /**
   * Constructs a new OnboardController object.
   */
  public function __construct(EntityTools $entity_tools_entity) {
    $this->entityService = $entity_tools_entity;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static($container->get('entity_tools'));
  }

  /**
   * Index.
   *
   * @return string
   *   Return Onboard render array.
   */
  public function index() {

    $workNodes = $this->entityService->getNodes('work');
    $workCarouselItems = [];
    foreach ($workNodes as $node) {
      $workCarouselItems[] = $this->entityService->getEntityView($node, 'teaser'); // @todo change by slide
    }

    $text = $this->t('Project roadmap');
    $options = ['absolute' => TRUE];
    // @todo get from configuration
    $url = Url::fromRoute('entity.node.canonical', ['node' => 31], $options);
    $link = Link::fromTextAndUrl($text, $url)->toString();
    drupal_set_message($this->t('This site is a work in progress, view the @project_roadmap', ['@project_roadmap' => $link]), 'warning');
    $build['onboard_page'] = [
      '#theme' => 'onboard',
      '#work_carousel_items' => $workCarouselItems,
    ];

    return $build;
  }

}
