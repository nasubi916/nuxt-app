<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <NuxtLink class="navbar-brand" to="/">Nusubiのnavbar</NuxtLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NuxtLink to="/" class="nav-link" activeClass="active" aria-current="page">Home</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/next" class="nav-link" activeClass="active" aria-current="page">next</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/MyFavGame" class="nav-link" activeClass="active" aria-current="page">MyFavGame</NuxtLink>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        Navbar text with an inline element
                    </span>
                </div>
            </div>
        </nav>
    </div>
</template>