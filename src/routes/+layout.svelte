<script>
  let { children } = $props();
</script>
<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img
        src="/images/logo.png"
        alt="Logo"
        width="30"
        height="30"
        class="d-inline-block align-text-top"
      />
      Projekt Manager
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/projects">Projektübersicht</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/personals">Personalliste</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/login">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<!-- Page Inhalt-->
<div class="containe mt-3">
  {@render children()}
</div>
