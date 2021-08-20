<div className="container All">
                <form>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={image}></img>
                        </div>
                        <div className="col-md-6">
                            <div className=" All">
                                <h1>{datas.email}</h1>
                                <h1>web developerdddddddddddddddd</h1>
                                <p className=" mt-3 mb-5  ">Rating<span>4dddddddddddd/7</span></p>

                                <ul class="navbar-nav  ml-auto mb-2 mb-lg-0">
                                    <li class="nav-item">

                                        <a className="nac" id="Profilee" data-toggle="tab" href="#Profilee">cjjjjontact</a>
                                    </li>
                                    <li class="nav-item">
                                        <p className="profiel-rating mt-3 mb-5">up<span>4/7</span></p>
                                    </li>

                                </ul>

                            </div>

                        </div>
                        <div className="col-md-2">
                            <input type='submit' className="profile" value=" edit profile">gggggggg</input>

                        </div>




                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile d-grid  flex-column">
                                    <p>
                                        work linli
</p>
                                    <a href="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" target="thapa">{datas.name}</a>
                                    <a href="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" target="thapa">{datas.email}</a>
                                    <a href="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" target="thapa">Prashant</a>
                                    <a href="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" target="thapa">Prashant</a>
                                    <a href="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" target="thapa">Prashant</a>
                                    <a href="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" target="thapa">Prashant</a>
                                    <a href="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" target="thapa">Prashant</a>
                                    <a href="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" target="thapa">Prashant</a>
                                    <a href="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" target="thapa">Prashant</a>

                                </div>

                            </div>


                            <div className="col-md-8 All" >
                                <div id="Profilee">
                                    <div className="tab" >
                                        <div className="row">



                                            <div className="col-md-6">
                                                <label htmlFor="user-10">user</label>
                                            </div>
                                            <div className="col-md-6">55555</div>


                                            <div className="col-md-6">
                                                <label htmlFor="user-10">Name</label>
                                            </div>
                                            <div className="col-md-6">Prashant</div>


                                        </div>

                                    </div>

                                </div>
                            </div>



















                        </div>
                    </div>

                </form>
            </div>






            <div className="container-fluid  A">
                <div className=" row A3 d-flex justify-content-center align-items-center mt-5 ">
                    <div className="row col-3 A2">
                        <form>

                            <div class="mb-3 A4" >
                                <MailOutlineIcon><label for="formGroupExampleInput" class="form-label">email</label></MailOutlineIcon>
                                <input type="text" class=" text form-control border-bottom-border-bottom"
                                    name="email"
                                    value={data.email}
                                    onChange={inputevent}
                                    placeholder="email" />
                            </div>

                            <div class="mb-3 A4" >
                                <MailOutlineIcon><label for="formGroupExampleInput" class="form-label">password</label></MailOutlineIcon>
                                <input type="text"
                                    name="password"
                                    value={data.password}
                                    onChange={inputevent}
                                    class=" text form-control border-bottom-border-bottom" placeholder="password" />
                            </div>
                            <div className="signin">
                                <input type="signin" placeholder="sign" onClick={sign} />

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>